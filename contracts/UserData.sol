// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserDataStorage {
    struct UserData {
        string name;
        string email;
        string lastName;
        string zkAddress;
    }

    mapping(address => UserData) private userDatas;

    event UserDataUpdated(
        address indexed user,
        string name,
        string email,
        string lastName,
        string zkAddress
    );

    function setUserData(
        string calldata _name,
        string calldata _email,
        string calldata _lastName,
        string calldata _zkAddress
    ) external {
        UserData storage userData = userDatas[msg.sender];
        userData.name = _name;
        userData.email = _email;
        userData.lastName = _lastName;
        userData.zkAddress = _zkAddress;

        emit UserDataUpdated(
            msg.sender,
            _name,
            _email,
            _lastName,
            _zkAddress
        );
    }

    function getUserData(address userAddress) external view returns (
        string memory name,
        string memory email,
        string memory lastName,
        string memory zkAddress
    ) {
        UserData memory userData = userDatas[userAddress];
        name = userData.name;
        email = userData.email;
        lastName = userData.lastName;
        zkAddress = userData.zkAddress;
    }
}