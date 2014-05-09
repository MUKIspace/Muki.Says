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
      var _gradient;
      _gradient = this.cxt.createLinearGradient(0, 0, 170, 0);
      _gradient.addColorStop(0, '#777');
      _gradient.addColorStop(0.5, '#999');
      _gradient.addColorStop(1, '#AAA000');
      this.cxt.fillStyle = _gradient;
      this.cxt.font = 'bold 26px Arial';
      this.cxt.textAlign = 'left';
      this.cxt.textBaseline = 'middle';
      this.cxt.fillText('Muki Say,', 80, 370, 350);
      return this;
    };

    StoryCanvas.prototype.addMessage = function() {
      this.cxt.fillStyle = '#777';
      this.cxt.font = 'bold 24px Arial';
      this.cxt.textAlign = 'left';
      this.cxt.textBaseline = 'middle';
      this.cxt.fillText($('#says-text').val(), 130, 425, 400);
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

  $("#says-text").on("change keyup", function() {
    return new StoryCanvas();
  });

}).call(this);

//# sourceMappingURL=app.js.map
