FactoryBot.define do 
  factory :school do 
    name { Faker::University.name }
    city { Faker::Address.city }
    state { Faker::Address.state }
    latitude { 20 }
    longitude { 40 }
    distance { Faker::Number.number(digits: 1).to_i }
    image_url { Faker::Internet.url }
  end
end