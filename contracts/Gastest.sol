pragma solidity 0.8.0;

contract Gastest {
    uint256 public constant N = 10**18;
    
    uint256 public foo;
    uint256 public bar;

    function f() public {
        foo = N;
    }

    function g() public {
        bar = 10**18;
    }
}
