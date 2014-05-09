
# 背景圖片 Class
class StoryImage
	constructor: (@name) ->
		defer = new jQuery.Deferred()
		image = new Image()

		image.src = "/apps/story-generator/#{name}.jpg"
		image.onload = ()->
			defer.resolve()

		image.onReady = ()->
			defer.promise()

		return image
