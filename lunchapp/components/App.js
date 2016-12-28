import React, {Component} from 'react';
import {
	Navigator,
} from 'react-native';
import PageMenu from './PageMenu';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

export default class Lunchup extends Component {

	constructor(props) {
		super(props);
		this._setNavigatorRef = this._setNavigatorRef.bind(this);
	}

	renderScene(route, nav) {
		switch (route.id) {
			case 'first':
				return <PageMenu navigator={nav}><FirstPage/></PageMenu>;
			case 'second':
				return <PageMenu navigator={nav}><SecondPage/></PageMenu>;
			case 'third':
				return <PageMenu navigator={nav}><ThirdPage/></PageMenu>;
			default:
				return <PageMenu navigator={nav}><FirstPage/></PageMenu>;
		}
	}

	componentWillUnmount() {
		this._listeners && this._listeners.forEach(listener => listener.remove());
	}

	_setNavigatorRef(navigator) {
		if (navigator !== this._navigator) {
			this._navigator = navigator;

			if (navigator) {
				var callback = (event) => {
					console.log(
						`NavigatorMenu: event ${event.type}`,
						{
							route: JSON.stringify(event.data.route),
							target: event.target,
							type: event.type,
						}
					);
				};
				// Observe focus change events from the owner.
				this._listeners = [
					navigator.navigationContext.addListener('willfocus', callback),
					navigator.navigationContext.addListener('didfocus', callback),
				];
			}
		}
	}
	
	render() {
		return (
			<Navigator
				ref={this._setNavigatorRef}
				initialRoute={{id: 'first'}}
				renderScene={this.renderScene}
				configureScene={(route) => {
					if (route.sceneConfig) {
						return route.sceneConfig;
					}
					return Navigator.SceneConfigs.FloatFromBottom;
				}}
			/>
		);
	}
};