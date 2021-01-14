class School < ActiveRecord::Base
  geocoded_by :address
end