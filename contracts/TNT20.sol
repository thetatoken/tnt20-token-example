// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TNT20 is ERC20 {
    using SafeMath for uint;

    event UpdateStakerRewardPerBlock(uint newStakerRewardPerBlock);
    event UpdateAdmin(address newAdmin);
    event UpdateMinter(address newMinter);

    uint8 private _decimals; 
    address public admin;

    constructor(string memory name_, string memory symbol_, uint8 decimals_, 
        address initDistrWallet_, uint initMintAmount_, address admin_) ERC20(name_, symbol_) {
        _decimals = decimals_;
        admin = admin_;
        _mint(initDistrWallet_, initMintAmount_);
        emit UpdateAdmin(admin);
    }

    function mint(address receiver, uint amount) external adminOnly {
        _mint(receiver, amount);
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }

    function updateAdmin(address admin_) external adminOnly {
        admin = admin_;
        emit UpdateAdmin(admin);
    }

    modifier adminOnly() { 
        require(msg.sender == admin, "Only admin can make this call");
        _;
    }
}