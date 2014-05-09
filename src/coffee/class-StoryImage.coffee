
# 背景圖片 Class
class StoryImage
	constructor: (@name) ->
		defer = new jQuery.Deferred()
		image = new Image()

		image.src = "./images/hZ0tQQb.jpg"
		image.onload = ()->
			defer.resolve()

		image.onReady = ()->
			defer.promise()

		return image
