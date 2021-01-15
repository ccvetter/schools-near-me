class SchoolsController < ApplicationController
  def index 
    render json: School.all
  end

  def filter_schools
    coordinates = [params[:lat], params[:lng]]
    
    schools = School.near(coordinates, params[:distance])
    
    schools.each do |school| 
      school.distance = school.distance_to(coordinates)
    end
    render json: schools
  end
end
