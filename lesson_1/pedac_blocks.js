// PEDAC Guided Practice: Leftover Blocks

/* 

//Problem:
input:
- integer of specific amount of blocks available 

output:
- integer of blocks leftover after using them to build tallest structure possible

explicit rules:
- blocks are cubes
- specific number of blocks given
- top layer is single block
- upper layer block is supported by 4 lower blocks
- lower block can support more than 1 upper block
- no gaps between blocks

implicit rules:
- blocks are uniform
- cubic pyramidal shape is only valid structure
- layers sizes are square numbers (1, 4, 9) = number of blocks in layer

// Examples
- lower layers use no more than 4 blocks per upper block
- there will sometimes be no blocks left over

// Data Structures
- integers
- dont need arrays? imaginary lego structure

// Algorithm
1. Start with:
  - A count of the 'number of blocks remaining' equal to the input
  - A count of the 'current layer' equal to 0
2. Calculate the number for the 'next layer' by adding 1 to the value for the 'current layer'
3. Using the number for the 'next layer', calculate the 'number of blocks required' to build that layer, by multiplying the number by itself
4. Determine if the 'number of blocks remaining' is greater than or equal to the 'number of blocks required' to build the layer
  - If it is:
    - Subtract the 'number of blocks required' from the 'number of blocks remaining'
    - Increment the 'current layer' by 1
    - Go back to Step 2
  - If it isn't:
    - Return the 'number of blocks remaining'
  
  */
 // Code

function calculateLeftoverBlocks(blocks) {
  let blocksRemaining = blocks;
  let currentLayer = 0;

  let blocksRequired = (currentLayer + 1)**2;

  while (blocksRemaining >= blocksRequired) {
      blocksRemaining -= blocksRequired;
      currentLayer += 1;
      blocksRequired = (currentLayer + 1)**2;
        //console.log({remainingCubes}, {currentLayer}, {requiredCubes})
    }

  return blocksRemaining;
}

console.log(calculateLeftoverBlocks(2));