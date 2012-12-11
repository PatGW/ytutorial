class Tutorial < ActiveRecord::Base
  
  belongs_to :user
  has_many :steps
  
  acts_as_taggable
  
  def editor?(edit_user)
    self.user_id == edit_user.id || edit_user.admin?
  end
end
