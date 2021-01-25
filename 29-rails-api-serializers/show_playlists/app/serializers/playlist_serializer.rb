class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :motto
  
  has_many :shows
end
