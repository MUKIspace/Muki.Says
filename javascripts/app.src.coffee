# Canvas Class
class StoryCanvas
	constructor: () ->
		_imgName = $('#storyImage').val()


		@canvas = document.getElementById 'myCanvas'
		@cxt = @canvas.getContext '2d'


		#
		# img 用自定的 StoryImage 物件
		#
		@img = images[_imgName] or new StoryImage _imgName


		#
		# this.render 會有 this 問題，用 => 解決
		#
		@img.onReady().then ()=>
			@.render().addTitle().addMessage().addInfo().output()

		return @

	render: ()->
		@cxt.fillStyle = '#000'
		@cxt.drawImage @img, 0, 0

		return @

	addTitle: ()->
		@cxt.font = 'bold 26px Arial'
		@cxt.textAlign = 'center'
		@cxt.textBaseline = 'top'
		@cxt.fillText $('#title').val(), 250, 26
		return @

	addMessage: ()->
		@cxt.font = 'bold 16px Arial'
		@cxt.textAlign = 'left'
		@cxt.textBaseline = 'top'
		@cxt.fillText $('#msg1').val(), 20, 115, 160
		@cxt.fillText $('#msg2').val(), 310, 236, 160
		@cxt.fillText $('#msg3').val(), 20, 404, 160
		@cxt.fillText $('#msg4').val(), 310, 536, 160
		return @

	addInfo: ()->
		@cxt.font = '12px Arial'
		@cxt.textAlign = 'left'
		@cxt.textBaseline = 'top'
		@cxt.fillText 'Fandora 怪獸大暴走', 0, 650
		@cxt.fillText 'http://shop.fandora.tw/story-generator', 0, 665
		return @

	output: ()->
		output = document.getElementById 'imgOut'
		output.src = @canvas.toDataURL()
		return @


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
