import React, { useState } from "react";

class Form extends Components {
    constructor(props) {
        super(props);

        this.state = {
            fullname: "",
            email: "",
            username: "",
            password: "",
        };
    }

    handleFullnameChange = (event) => {
        this.setState({
            fullname: event.target.value,
        });
    };

    handleSubmit = (event) => {
        alert(
            `${this.state.fullname} ${this.state.email} ${this.state.username} ${this.state.password}`
        );
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Full Name</label>
                    <input
                        type="text"
                        value={this.state.fullname}
                        onChange={this.handleFullnameChange}
                    />
                </div>
            </form>
        );

        handleEmailChange = (event) => {
            this.setState({
                email: event.target.value,
            });
        };
    }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email</label>
                        <this.handleFullnameChangeinput
                            type="text"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                    </div>
                </form>
            );
        }

        handleUsernameChange = (event) => {
            this.setState({
                password: event.target.value,
            });
        };


        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleusernameChange}
                        />
                    </div>
                </form>
            )
        }

        handlePasswordChange = (event) => {
            this.setState({
                password: event.target.value,

                render() {
                    return (
                        <form>
                            <div>
                                <label>Password</label>
                                <input
                                    type="text"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                />
                            </div>
                            <button type="submit"> Submit</button>
                        </form>
                    );
                },
            });

            export default Form;
        };
    }