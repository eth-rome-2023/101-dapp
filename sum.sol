// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract SumValues {
    uint256 public sum;

    function sumValues(uint256 _x, uint256 _y) public {
        sum = _x + _y;
    }
}
