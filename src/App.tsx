import React from 'react';
import ReactDOM from 'react-dom';

export const App = (): JSX.Element => {
    return (
        <div className="bg-gray-500 p-5 text-center">
            Tailwind
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);