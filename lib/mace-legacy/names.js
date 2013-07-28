/**
 * Object identifiers declared in LDAP: Schema for User Applications.
 *
 * References:
 *   - [RFC 4519](http://tools.ietf.org/html/rfc4519)
 */
exports.BUSINESS_CATEGORY             = 'businessCategory';
exports.COMMON_NAME                   = 'cn';
exports.DESCRIPTION                   = 'description';
exports.FACSIMILE_TELEPHONE_NUMBER    = 'facsimileTelephoneNumber';
exports.GIVEN_NAME                    = 'givenName';
exports.INITIALS                      = 'initials';
exports.LOCALITY_NAME                 = 'l';
exports.ORGANIZATION_NAME             = 'o';
exports.ORGANIZATIONAL_UNIT_NAME      = 'ou';
exports.PHYSICAL_DELIVERY_OFFICE_NAME = 'physicalDeliveryOfficeName';
exports.POSTAL_ADDRESS                = 'postalAddress';
exports.POSTAL_CODE                   = 'postalCode';
exports.POST_OFFICE_BOX               = 'postOfficeBox';
exports.SEE_ALSO                      = 'seeAlso';
exports.SURNAME                       = 'sn';
exports.STATE_OR_PROVINCE_NAME        = 'st';
exports.STREET_ADDRESS                = 'street';
exports.TELEPHONE_NUMBER              = 'telephoneNumber';
exports.TITLE                         = 'title';
exports.USERID                        = 'uid';


/**
 * Object identifiers declared in Definition of the inetOrgPerson LDAP Object Class.
 *
 * References:
 *   - [RFC 2798](http://tools.ietf.org/html/rfc2798)
 */
exports.CAR_LICENSE            = 'carLicense';
exports.DEPARTMENT_NUMBER      = 'departmentNumber';
exports.DISPLAY_NAME           = 'displayName';
exports.EMPLOYEE_NUMBER        = 'employeeNumber';
exports.EMPLOYEE_TYPE          = 'employeeType';
exports.JPEG_PHOTO             = 'jpegPhoto';
exports.PREFERRED_LANGUAGE     = 'preferredLanguage';
exports.USER_SMIME_CERTIFICATE = 'userSMIMECertificate';


// TODO: homePhone
// TODO: homePostalAddress
// TODO: labeledURI
// TODO: mail
// TODO: manager
// TODO: mobile
// TODO: pager
// TODO: roomNumber
// TODO: userCertificate


/**
 * Object identifiers declared in EduPerson Object Class Specification.
 *
 * References:
 *   - [eduPerson & eduOrg Object Classes](http://middleware.internet2.edu/eduperson/)
 *   - [EduPerson Object Class Specification (200604a)](http://middleware.internet2.edu/eduperson/docs/internet2-mace-dir-eduperson-200604.html)
 */
exports.EDUPERSON_AFFILIATION         = 'eduPersonAffiliation';
exports.EDUPERSON_ENTITLEMENT         = 'eduPersonEntitlement';
exports.EDUPERSON_NICKNAME            = 'eduPersonNickname';
exports.EDUPERSON_ORG_DN              = 'eduPersonOrgDN';
exports.EDUPERSON_ORG_UNIT_DN         = 'eduPersonOrgUnitDN';
exports.EDUPERSON_PRIMARY_AFFILIATION = 'eduPersonPrimaryAffiliation';
exports.EDUPERSON_PRIMARY_ORG_UNIT_DN = 'eduPersonPrimaryOrgUnitDN';
exports.EDUPERSON_PRINCIPAL_NAME      = 'eduPersonPrincipalName';
exports.EDUPERSON_SCOPED_AFFILIATION  = 'eduPersonScopedAffiliation';
exports.EDUPERSON_TARGETED_ID         = 'eduPersonTargetedID';


/**
 * Object identifiers declared in LDAP representations of eduCourse attributes.
 *
 * References:
 *   - [MACE - CourseID](http://middleware.internet2.edu/courseID/)
 *   - [LDAP representations of eduCourse attributes and an auxiliary object class](http://middleware.internet2.edu/courseid/docs/internet2-mace-dir-courseid-educourse-ldap-200507.html)
 */
exports.EDUCOURSE_MEMBER = 'eduCourseMember';
