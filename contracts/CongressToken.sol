pragma solidity ^0.4.23;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "zeppelin-solidity/contracts/ownership/ownable.sol";

contract CongressToken is ERC721Token, Ownable {

    constructor() ERC721Token("Congress", "CONGREX") public {}

    function mintTo(uint _id, string _tokenURI) public onlyOwner {
        _mint(msg.sender, _id);
        _setTokenURI(_id, _tokenURI);
    }
}
