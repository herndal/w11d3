class User < ApplicationRecord
    
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :username, :session_token, :password_digest, presence: true
    validates :username, uniqueness: true
        
    attr_reader :password

    # fig vaper
    before_validation :ensure_session_token
    # after_initialize :ensure_session_token


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            return user
        else 
            return nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    private
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

end
