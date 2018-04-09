#!/usr/bin/python

import ldap
import getpass

def check_credentials(userid, password):
   LDAP_SERVER = 'ldaps://ldap.jnpr.net'
   # fully qualified AD user name
   userids='vemulan'
   LDAP_USERNAME = '%s@juniper.net' % userid
   # your password
   LDAP_PASSWORD = password
   base_dn = 'DC=jnpr,DC=net'
   searchfilter = "(&(objectClass=user)(sAMAccountName=%s))"%(userids)
   attribs = ['sAMAccountName']
   try:
       # build a client
       ldap_client = ldap.initialize(LDAP_SERVER)
       # perform a synchronous bind
       ldap_client.set_option(ldap.OPT_REFERRALS,0)
       ldap_client.simple_bind_s(LDAP_USERNAME, LDAP_PASSWORD)
   except ldap.INVALID_CREDENTIALS:
       ldap_client.unbind()
       print  'Wrong username ili password'
   except ldap.SERVER_DOWN:
       return 'AD server not awailable'

   result=ldap_client.search_s(base_dn, ldap.SCOPE_SUBTREE,searchfilter,attribs)
   print result[0][1]['sAMAccountName'][0]
   print result[0][0]
   ldap_client.unbind()

#check_credentials('Unix Guest','qO03E$Nf6d#OQbUqW%#IG7@v**falu')
cuserid = raw_input('check userid:')
password = getpass.getpass('Password:')
#check_credentials('Unix Guest','qO03E$Nf6d#OQbUqW%#IG7@v**falu',cuserid)
#cuserid='vemulan'
check_credentials(cuserid,password)