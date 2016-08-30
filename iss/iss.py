import urllib2
import json
import pprint as pp

req = urllib2.Request("http://api.open-notify.org/iss-now.json")
response = urllib2.urlopen(req)

obj = json.loads(response.read())

pp.pprint(obj)
