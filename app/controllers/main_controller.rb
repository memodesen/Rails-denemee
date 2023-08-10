class MainController < ApplicationController
    def index
    @questions=Question.all
    end
end
