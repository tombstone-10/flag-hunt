# Flag Hunt
This repository contains a Node.js script that automates the process of uncovering a hidden flag.

# How It Works

1. The script uses the axios library to send HTTP POST requests to the challenge API.
2. It starts by sending an initial request to the API without any cursor.
3. The API responds with a message and a nextCursor value.
4. The script then enters a loop, continually sending the nextCursor back to the API in each subsequent request.
5. This process repeats until the API no longer provides a nextCursor, indicating that the challenge is complete and the final flag has been reached.

## Prerequisites

- Node.js and npm should be installed on your system.

- The axios library is required. Install it via npm:
> npm install axios

- Clone this repository:
> git clone https://github.com/tombstone-10/flag-hunt.git

- Navigate to the project directory.
  
- Run the script:
> node catchFlag.js

The script will log messages from the API and will automatically stop once the final flag is retrieved.
