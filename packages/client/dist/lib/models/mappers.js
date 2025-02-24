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
exports.PasswordResetRequestDto = {
    serializedName: "PasswordResetRequestDto",
    type: {
        name: "Composite",
        className: "PasswordResetRequestDto",
        modelProperties: {
            email: {
                required: true,
                serializedName: "email",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.PasswordResetDto = {
    serializedName: "PasswordResetDto",
    type: {
        name: "Composite",
        className: "PasswordResetDto",
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
            },
            newPassword: {
                required: true,
                serializedName: "newPassword",
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
exports.Carpool = {
    serializedName: "Carpool",
    type: {
        name: "Composite",
        className: "Carpool",
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
                    name: "String"
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
                    name: "String"
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
exports.Car = {
    serializedName: "Car",
    type: {
        name: "Composite",
        className: "Car",
        modelProperties: {
            capacity: {
                required: true,
                serializedName: "capacity",
                type: {
                    name: "Number"
                }
            },
            color: {
                required: true,
                serializedName: "color",
                type: {
                    name: "String"
                }
            },
            type: {
                required: true,
                serializedName: "type",
                type: {
                    name: "String"
                }
            }
        }
    }
};
exports.CreateDriverDto = {
    serializedName: "CreateDriverDto",
    type: {
        name: "Composite",
        className: "CreateDriverDto",
        modelProperties: {
            car: {
                required: true,
                serializedName: "car",
                type: {
                    name: "Composite",
                    className: "Car"
                }
            }
        }
    }
};
exports.DriverDto = {
    serializedName: "DriverDto",
    type: {
        name: "Composite",
        className: "DriverDto",
        modelProperties: {
            id: {
                required: true,
                serializedName: "id",
                type: {
                    name: "String"
                }
            },
            car: {
                required: true,
                serializedName: "car",
                type: {
                    name: "Composite",
                    className: "Car"
                }
            },
            carpoolId: {
                required: true,
                serializedName: "carpoolId",
                type: {
                    name: "String"
                }
            },
            user: {
                required: true,
                serializedName: "user",
                type: {
                    name: "Composite",
                    className: "UserDto"
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