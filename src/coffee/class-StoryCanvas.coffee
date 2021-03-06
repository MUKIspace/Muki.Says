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
			@.render().addTitle().addMessage().output()

		return @

	render: ()->
		@cxt.fillStyle = '#000'
		@cxt.drawImage @img, 0, 0

		return @

	addTitle: ()->
		_gradient = @cxt.createLinearGradient 0, 0, 170, 0
		_gradient.addColorStop 0, '#777'
		_gradient.addColorStop 0.5, '#999'
		_gradient.addColorStop 1, '#AAA000'
		@cxt.fillStyle = _gradient

		@cxt.font = 'bold 36px Helvetica'
		@cxt.textAlign = 'left'
		@cxt.textBaseline = 'middle'
		@cxt.fillText 'MUKI \nSay:', 80, 370, 350
		return @

	addMessage: ()->
		@cxt.fillStyle = '#000'

		@cxt.font = 'bold 24px Helvetica'
		@cxt.textAlign = 'left'
		@cxt.textBaseline = 'middle'
		@cxt.fillText $('#says-text').val(), 95, 435, 500
		# @cxt.fillText $('#msg2').val(), 310, 236, 160
		# @cxt.fillText $('#msg3').val(), 20, 404, 160
		# @cxt.fillText $('#msg4').val(), 310, 536, 160
		return @

	output: ()->
		output = document.getElementById 'imgOut'
		output.src = @canvas.toDataURL()
		return @
