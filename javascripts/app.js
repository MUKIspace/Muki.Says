(function() {
  var StoryCanvas, StoryImage, images;

  StoryCanvas = (function() {
    function StoryCanvas() {
      var _imgName;
      _imgName = $('#storyImage').val();
      this.canvas = document.getElementById('myCanvas');
      this.cxt = this.canvas.getContext('2d');
      this.img = images[_imgName] || new StoryImage(_imgName);
      this.img.onReady().then((function(_this) {
        return function() {
          return _this.render().addTitle().addMessage().output();
        };
      })(this));
      return this;
    }

    StoryCanvas.prototype.render = function() {
      this.cxt.fillStyle = '#000';
      this.cxt.drawImage(this.img, 0, 0);
      return this;
    };

    StoryCanvas.prototype.addTitle = function() {
      this.cxt.font = 'bold 26px Arial';
      this.cxt.textAlign = 'center';
      this.cxt.textBaseline = 'top';
      this.cxt.fillText($('#says-text').val(), 200, 400, 350);
      return this;
    };

    StoryCanvas.prototype.addMessage = function() {
      this.cxt.font = 'bold 16px Arial';
      this.cxt.textAlign = 'left';
      this.cxt.textBaseline = 'top';
      return this;
    };

    StoryCanvas.prototype.output = function() {
      var output;
      output = document.getElementById('imgOut');
      output.src = this.canvas.toDataURL();
      return this;
    };

    return StoryCanvas;

  })();

  StoryImage = (function() {
    function StoryImage(name) {
      var defer, image;
      this.name = name;
      defer = new jQuery.Deferred();
      image = new Image();
      image.src = "./images/hZ0tQQb.jpg";
      image.onload = function() {
        return defer.resolve();
      };
      image.onReady = function() {
        return defer.promise();
      };
      return image;
    }

    return StoryImage;

  })();

  images = {};

  new StoryCanvas();

  $('#says-text').on('change', function() {
    return new StoryCanvas();
  });

}).call(this);

//# sourceMappingURL=app.js.map
