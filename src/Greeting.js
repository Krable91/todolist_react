import React from "react";

class Greeting extends React.Component {
    state = {
        USER_LS: "",
        haveCurrentUsers: false,
        userName: ""
    }

    submitActive(event) {
        event.preventDefault();
        console.log(event.target.textInput);
        const max = event.target.input;
        console.log(max);
    }
    start() {
        const currentUser = localStorage.getItem(this.USER_LS);
    if(currentUser === null){
            //유저가  없을 때
    } else {
            //유저가 있을 때
    }
    }
    render() {
        const {haveCurrentUsers} = this.state;
        this.start()
        return (
            <section>
                {haveCurrentUsers ? (
                    <div className="greeting">
                        <span>hello</span>
                    </div>
                ) : (
                    <form className = "js-form" onSubmit={this.submitActive}>
                        <input type="text" ref={(input => this.textInput = input)} placeholder="이름을 알려주세요!"></input>
                    </form>
                )}
            </section>
        )
    }

}
export default Greeting;