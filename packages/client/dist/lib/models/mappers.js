"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpDto = {
    serializedName: "SignUpDto",
    type: {
        name: "Composite",
        className: "SignUpDto",
        modelProperties: {
            email: {
                required: true,
                serializedName: "email",
                type: {
                    name: "String"
                }
            },
            password: {
                required: true,
                serializedName: "password",
                type: {
                    name: "String"
                }
            },
            displayName: {
                required: true,
                serializedName: "displayName",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.SignInDto = {
    serializedName: "SignInDto",
    type: {
        name: "Composite",
        className: "SignInDto",
        modelProperties: {
            email: {
                required: true,
                serializedName: "email",
                type: {
                    name: "String"
                }
            },
            password: {
                required: true,
                serializedName: "password",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.AuthDto = {
    serializedName: "AuthDto",
    type: {
        name: "Composite",
        className: "AuthDto",
        modelProperties: {
            accessToken: {
                required: true,
                serializedName: "access_token",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.Address = {
    serializedName: "Address",
    type: {
        name: "Composite",
        className: "Address",
        modelProperties: {
            name: {
                required: true,
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            administrative: {
                required: true,
                serializedName: "administrative",
                type: {
                    name: "String"
                }
            },
            county: {
                required: true,
                serializedName: "county",
                type: {
                    name: "String"
                }
            },
            city: {
                required: true,
                serializedName: "city",
                type: {
                    name: "String"
                }
            },
            country: {
                required: true,
                serializedName: "country",
                type: {
                    name: "String"
                }
            },
            countryCode: {
                required: true,
                serializedName: "countryCode",
                type: {
                    name: "String"
                }
            },
            postcode: {
                required: true,
                serializedName: "postcode",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.CarpoolDto = {
    serializedName: "CarpoolDto",
    type: {
        name: "Composite",
        className: "CarpoolDto",
        modelProperties: {
            carpoolName: {
                required: true,
                serializedName: "carpoolName",
                type: {
                    name: "String"
                }
            },
            destination: {
                required: true,
                serializedName: "destination",
                type: {
                    name: "Composite",
                    className: "Address"
                }
            },
            dateTime: {
                required: true,
                serializedName: "dateTime",
                type: {
                    name: "Object"
                }
            }
        }
    }
};
exports.CarpoolModel = {
    serializedName: "Carpool",
    type: {
        name: "Composite",
        className: "CarpoolModel",
        modelProperties: {
            id: {
                required: true,
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            created: {
                required: true,
                serializedName: "created",
                type: {
                    name: "Object"
                }
            },
            updated: {
                required: true,
                serializedName: "updated",
                type: {
                    name: "Object"
                }
            },
            name: {
                required: true,
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            destination: {
                required: true,
                serializedName: "destination",
                type: {
                    name: "Composite",
                    className: "Address"
                }
            },
            dateTime: {
                required: true,
                serializedName: "dateTime",
                type: {
                    name: "Object"
                }
            },
            drivers: {
                required: true,
                serializedName: "drivers",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            createdById: {
                required: true,
                serializedName: "createdById",
                type: {
                    name: "String"
                }
            },
            updatedById: {
                required: true,
                serializedName: "updatedById",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.UserDto = {
    serializedName: "UserDto",
    type: {
        name: "Composite",
        className: "UserDto",
        modelProperties: {
            id: {
                required: true,
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            email: {
                required: true,
                serializedName: "email",
                type: {
                    name: "String"
                }
            },
            displayName: {
                required: true,
                serializedName: "displayName",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.VerificationDto = {
    serializedName: "VerificationDto",
    type: {
        name: "Composite",
        className: "VerificationDto",
        modelProperties: {
            email: {
                required: true,
                serializedName: "email",
                type: {
                    name: "String"
                }
            },
            token: {
                required: true,
                serializedName: "token",
                type: {
                    name: "String"
                }
            }
        }
    }
};
//# sourceMappingURL=mappers.js.map