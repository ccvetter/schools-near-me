require 'rails_helper'

RSpec.describe 'Schools API', type: :request do 
  describe 'GET /schools' do
    before {
      create :school 
      get '/schools' 
    }

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'has the correct keys' do
      json_response = JSON.parse(response.body)
      expect(json_response[0].keys).to match_array(['id', 'name', 'city',
        'state', 'latitude', 'longitude', 'image_url'])
    end
  end

  describe 'GET /schools/:lat/:lng/:distance' do 
    before {
      create :school 
      get '/schools/20/40/10'
    }

    it 'returns status code 200' do 
      expect(response).to have_http_status(200)
    end

    it 'adds bearing and distance to object' do 
      json_response = JSON.parse(response.body)
      expect(json_response[0].keys).to match_array(['id', 'name', 'bearing', 'city',
        'state', 'latitude', 'longitude', 'distance', 'image_url'])
    end
  end
end
