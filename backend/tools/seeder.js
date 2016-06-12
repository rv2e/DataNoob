var mongoose = require('../lib/support/database');
var Assignments = require('../lib/support/assignments').Assignments;

Assignments.create([
  {
    id: 1,
    description: `Filip mentioned that different types behave differently in Python.

When you sum two strings, for example, you'll get different behavior than when you sum two integers or two booleans.

In the script some variables with different types have already been created. It's up to you to use them.

Instructions:
  - Calculate the product of savings and factor. Store the result in year1.
  - What do you think the resulting will be? Find out by printing out year1.
  - Calculate the sum of desc and desc (don't change the default desc value) and store the result in a new variable doubledesc.
  - Print out doubledesc. Did you expect this?`,
    editor: `# Several variables to experiment with
savings = 100
factor = 1.1
desc = "compound interest"

# Assign product of factor and savings to year1


# Print the type of year1


# Assign sum of desc and desc to doubledesc


# Print out doubledesc`,
    language: 'python',
    result: ['compound interestcompound interest', '110.0'],
  },
  {
    id: 2,
    description: `To help you remember what is stored in star_wars_matrix, you would like to add the names of the movies for the rows. Not only does this help you to read the data, but it is also useful to select certain elements from the matrix.

Similar to vectors, you can add names for the rows and the columns of a matrix

    rownames(my_matrix) <- row_names_vector
    colnames(my_matrix) <- col_names_vector
We went ahead and prepared two vectors for you: region, and titles. You will need these vectors to name the columns and rows of star_wars_matrix, respectively.

Instructions:
  - Use colnames() to name the columns of star_wars_matrix with the region vector.
  - Use rownames() to name the columns of star_wars_matrix with the titles vector.
  - Print out star_wars_matrix to see the result of your work.`,
    editor: `# Box office Star Wars (in millions!)
new_hope <- c(460.998, 314.4)
empire_strikes <- c(290.475, 247.900)
return_jedi <- c(309.306, 165.8)

# Construct matrix
star_wars_matrix <- matrix(c(new_hope, empire_strikes, return_jedi), nrow = 3, byrow = TRUE)

# Vectors region and titles, used for naming
region <- c("US", "non-US")
titles <- c("A New Hope", "The Empire Strikes Back", "Return of the Jedi")

# Name the columns with region


# Name the rows with titles


# Print out star_wars_matrix`,
    language: 'r',
    result: [
      'US non-US',
      'A New Hope              460.998  314.4',
      'The Empire Strikes Back 290.475  247.9',
      'Return of the Jedi      309.306  165.8',
    ],
  },
])
.finally(() => mongoose.connection.close())
.then(() => console.log('db seeded!'))
.catch(console.error)
