import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import StreamList from './streams/StreamList.js';
import StreamCreate from './streams/StreamCreate.js';
import StreamEdit from './streams/StreamEdit.js';
import StreamShow from './streams/StreamShow.js';
import StreamDelete from './streams/StreamDelete.js';
import Header from './Header.js';







const App =() =>{
	return (
		<div className="ui container">
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/create" exact component={StreamCreate} />
					<Route path="/streams/list" exact component={StreamList} />
					<Route path="/streams/edit" exact component={StreamEdit} />
					<Route path="/streams/show" exact component={StreamShow} />
					<Route path="/streams/delete" exact component={StreamDelete} />
				</div>
			</BrowserRouter>
		</div>
		);
};


export default App;