class FriendshipsController < ApplicationController

  def create
    Friendship.create(follower_id: @current_user.id, followee_id: params[:followee_id])

    redirect_to user_path(@current_user)
  end
  
end
