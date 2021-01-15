class School < ActiveRecord::Base
  attr_accessor :distance
  geocoded_by :address
end