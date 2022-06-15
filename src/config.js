export const ContractAddress = "0x536E4f64E2743911202Ef5A76f1FD6839d542c87";

export const ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_caseTitle",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_catogory",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_caseHandledBy",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_time",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_place",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "_evidence",
				"type": "string[]"
			}
		],
		"name": "CreateEvidence",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "newaddress",
				"type": "address"
			}
		],
		"name": "grandAccess",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "newaddress",
				"type": "address"
			}
		],
		"name": "GrandAccess",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "member",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "roleId",
				"type": "uint256"
			}
		],
		"name": "MemberAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "member",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "roleId",
				"type": "uint256"
			}
		],
		"name": "MemberRemoved",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			}
		],
		"name": "RemoveAccess",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			}
		],
		"name": "RemoveEvidence",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			}
		],
		"name": "GetEvidence",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_caseTitle",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_caseId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_catogory",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_caseHandledBy",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_time",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_place",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "_evidence",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_member",
				"type": "address"
			}
		],
		"name": "isViwer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "WHITELIST",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

