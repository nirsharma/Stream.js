function fromEvent(element, event) {
    return {
      subscribe : function(next, complete) {
        element.addEventListener(event, evt => next(evt))
      }
    }
  }
  
  
  
  function map(mapper, stream) {
    return {
      subscribe : function(next, complete) {
        stream.subscribe(item => next(mapper(item)), () => complete());
      }
    }
  }
  
  function filter(func, stream) {
    return {
      subscribe : function(next, complete) {
        stream.subscribe(item => {
          if(func(item)) next(item);
        }, () => complete());
      }
    }
  }
  
  function merge(stream1, stream2) {
      var flag = false;
    return {
        subscribe : function(next, complete) {
            stream1.subscribe(item => {
        next(item);
        }, () => {
            if(flag) complete();
            else flag = true;
        })
        stream2.subscribe(item => {
        next(item);
        }, () => {
            if(flag) complete();
            else flag = true;
        })
        }
    }
  }
  
  function startsWith(arr, stream) {
    return {
      subscribe : function(next, complete) {
        arr.forEach(item => next(item));
        stream.subscribe(item => next(item), () => complete());
      }
    }
  }
  
  // startsWith([1,2,3], fromArray([4,5,6,7,8])).subscribe(
  // x => console.log('value ', x),
  // () => console.log('completed')
  // );
  
  var button = document.querySelector('button');
  
  fromEventC = R.curry(fromEvent);
  fromArrayC = R.curry(fromArray);
  mapC = R.curry(map);
  filterC = R.curry(filter);
  
  //map('click', fromEvent(button, 'click')).subscribe(console.log);
  
  R.compose(filterC(x => (x % 2 == 0)), fromArrayC)([1,2,3,4,5,6,7,8]).subscribe(console.log, () => console.log('complete'));
  
  //  R.compose(mapC(x => 'click'))(fromEventC(button, 'click')).subscribe(console.log);
  
  // R.pipe(fromEventC(button, 'click'), mapC('click'))().subscribe(console.log);