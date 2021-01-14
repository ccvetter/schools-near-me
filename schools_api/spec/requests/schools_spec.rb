require 'rails_helper'

RSpec.describe 'Schools API', type: :request do 
  describe 'GET /schools' do 
    before { get'/schools' }

    it 'returns status code 200' do 
      expect(response).to have_http_status(200)
    end
  end

  # describe 'GET /schools/:lat/:lng/:distance' do 
  #   before { get "/schools/${" }
end
