class SchoolsController < ApplicationController
  def index 
    render json: School.all
  end

  def filter_schools
    render json: School.near([params[:lat], params[:lng]], params[:distance])
  end
end
