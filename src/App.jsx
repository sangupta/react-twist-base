import React from 'react';
import ReactDOM from 'react-dom';

@Component
class App {

    @Observable title = 'Hello World';

    attached() {
        setTimeout(this.changeTitle, 1000);
    }

    @Bind
    changeTitle() {
        this.title = "Hello World, updated!";
    }

    render() {
        return <div>{ this.title }</div>;
    }

}

ReactDOM.render( <App />, document.getElementById('appRoot') );

module.hot.accept();
