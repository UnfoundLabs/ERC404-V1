// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./ERC404.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Unfound is ERC404 {
    using Strings for uint256;

    string public dataURI;

    constructor(address _owner) ERC404("Demo", "DEMO", 18, 8, _owner) {
        balanceOf[_owner] = 8 * 10 ** 18;
    }

    function setDataURI(string memory _dataURI) public onlyOwner {
        dataURI = _dataURI; 
    }

    function setNameSymbol(string memory _name, string memory _symbol) public onlyOwner {
        _setNameSymbol(_name, _symbol);
    }

    function tokenURI(uint256 id) public view override returns (string memory) {
        return string(abi.encodePacked(dataURI, Strings.toString(id), ".json"));
    }

}
