import React from "react";
import SkillSection from "./SkillSection";
import HomeSection from "./HomeSection";
// import PropTypes from 'prop-types';


class Home extends React.Component {

    // static propTypes = {
    // }

    // static defaultProps = {
    // }

    constructor(props) {
        super(props);
        this.state = {
            isSkillOpened: false,
        };
        this.handleSkillSection = this.handleSkillSection.bind(this);
    }

    handleSkillSection() {
        this.setState({ isSkillOpened: !this.state.isSkillOpened })
    }

    render() {
        console.log(this.props.isDark)
        return (
            <div id="home-container" className="flex flex-row sm:basis-full sm:static absolute w-screen h-screen">
                <SkillSection
                    handleSkillSection={this.handleSkillSection}
                    isSkillOpened={this.state.isSkillOpened}
                />
                <HomeSection
                    handleSkillSection={this.handleSkillSection}
                />
            </div>
        )
    }
}

export default Home;