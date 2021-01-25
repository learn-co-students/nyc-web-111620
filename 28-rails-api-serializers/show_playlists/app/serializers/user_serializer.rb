class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :tagline, :name_and_tag #, :playlists


  has_many :playlists

  # has_many :shows

end
