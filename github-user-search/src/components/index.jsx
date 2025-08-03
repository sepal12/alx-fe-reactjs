import React from 'react';
import SearchInput from './SearchInput';
import UserList from './UserList';

const Index = () => {
    return (
        <div>
            <h1>GitHub User Search</h1>
            <SearchInput />
            <UserList />
        </div>
    );
};

export default Index;