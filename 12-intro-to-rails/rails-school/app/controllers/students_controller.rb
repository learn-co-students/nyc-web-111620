class StudentsController < ApplicationController

  def index 
    # some logic
    @students = Student.all

    render :index
  end

  def show 
    @student = Student.find(params[:id])
    render :show
  end 
end 
