import React from 'react';

import SkillInput from './skillInput/skillInput';
import CreateCharacterButton from './createButton/createButton';
import CharacterNameInput from './nameInput/nameInput';
import ProfileImage from './profileImage/profileImage';
import CreationPointsLeft from './pointsLeft/pointsLeft';

import error from '../../../shared/errorMessages';
import './creation.css';

class Creation extends React.Component {

    constructor (props) {
        super (props);

        this.state = {
            player: props.player,
            character: props.character,
            isHidden: props.isHidden,
            disabled: props.disabled
        };
    }

    componentDidMount() {
        document.addEventListener('show-character-creation', this.show.bind(this), true);
        document.addEventListener('hide-character-creation', this.hide.bind(this), true);
    }

    render() {
        if (this.state.isHidden) {
            return null;
        }

        return (
            <form action='#' id='character-creation' onSubmit={this.handleSubmit.bind(this)}>

                <CharacterNameInput name={this.state.character.name} />

                <p>
                    <ProfileImage src={this.state.player.profileImageUrl} title={this.state.player.displayName} />
                    <CreationPointsLeft creationPointsLeft={this.state.character.creationPointsLeft} />
                </p>

                <SkillInput skill='life' score={this.state.character.life} change={this.update.bind(this)} />
                <SkillInput skill='magic' score={this.state.character.magic} change={this.update.bind(this)} />
                <SkillInput skill='summoning' score={this.state.character.summoning} change={this.update.bind(this)} />

                <CreateCharacterButton playerid={this.state.player.id} />

            </form>
        )
    }

    hide (e) {
        this.setState({
            isHidden: true,
            disabled: ''
        });
    }

    show (e) {
        const player = e.detail.player;
        const character = e.detail.character || 
            {
                creationPointsLeft: 30,
                summoning: 30,
                magic: 30,
                life: 30
            };

        this.setState({
            player: e.detail.player,
            character: character,
            isHidden: false,
            disabled: ''
        });
    }

    update (e) {
        var _skill = {
            name: e.currentTarget.id.substring(10).toLowerCase(),
            value: parseInt(e.currentTarget.value, 10)
        };

        // Make a deep copy rather than references to the same object, 
        // because I want to update with setState, it's bad practice 
        // to update the state directly without setState.
        // More about this: http://jsperf.com/cloning-an-object/2
        var character = JSON.parse(JSON.stringify(this.state.character));

        var _creationPointsLeft = parseInt(character.creationPointsLeft, 10);

        // May be a negative value.
        var _difference = parseInt(character[_skill.name], 10) - _skill.value;

        var _hasEnoughPointsLeft = (_creationPointsLeft + _difference) >= 0;

        if (!_hasEnoughPointsLeft) {
            e.preventDefault();
            e.currentTarget.value = character[_skill.name];
            console.warn(error.pointsLeft.notEnough);
            return;
        }

        character[_skill.name] = _skill.value;
        character.creationPointsLeft = _creationPointsLeft + _difference;

        this.setState({
            character: character
        });
    }

    handleSubmit (e) {
        e.preventDefault();

        var _this = this;
    }

}

Creation.propTypes = {
    player: React.PropTypes.object,
    character: React.PropTypes.object,
    isHidden: React.PropTypes.bool,
    disabled: React.PropTypes.string
};

Creation.defaultProps = {
    player: null,
    character: null,
    isHidden: true,
    disabled: ''
}

module.exports = Creation;
