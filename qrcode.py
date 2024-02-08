import time

import cv2
from pynput.keyboard import Controller, Key

keyboard = Controller()
qcd = cv2.QRCodeDetector()
camera = cv2.VideoCapture(0, cv2.CAP_DSHOW)

while not camera.isOpened():
	print("Attempting to access camera stream")
	time.sleep(1)
print("Camera stream opened")

def pressAndRelease(key):
	keyboard.press(key)
	time.sleep(0.05)
	keyboard.release(key)
 
def press(*keys):
	for key in keys:
		keyboard.press(key)
		time.sleep(0.20)
 
def release(*keys):
	for key in keys:
		keyboard.release(key)

def addToSheets(data):
	keyboard.type(data)
	pressAndRelease(Key.enter)
	pressAndRelease(Key.up)
	press(Key.alt_l, 'd', 'e')
	release(Key.alt_l, 'd', 'e')
	pressAndRelease(Key.esc)
	pressAndRelease(Key.down)

prev_codes = ()
while True:
	ret, frame = camera.read()
	retval, qrcodes, points, straight_qrcode = qcd.detectAndDecodeMulti(frame)
	if (qrcodes != ()):
		if (qrcodes == prev_codes): continue
		for qrcode in qrcodes:
			if (qrcode != None and qrcode != ""):
				print(qrcode)
				addToSheets(qrcode)
		prev_codes = qrcodes