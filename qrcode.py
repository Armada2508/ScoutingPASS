import glob
import time

import cv2
import pyautogui
import pyperclip
from pynput.keyboard import Controller, Key, Listener

#keyboard = Controller()
qrCodeDetector = cv2.QRCodeDetector()
camera = cv2.VideoCapture(0)

while not camera.isOpened():
	print("Attempting to access camera stream")
	time.sleep(1)
print("Camera stream opened")


def addToSheets(text):
    pyperclip.copy(text + "\n")
    pyautogui.hotkey('ctrl', 'v')
 
prev_codes = []
escPressed = True

def onEscPressed(e):
    print("Test")
    global escPressed
    escPressed = True

while True:
	qrstr = ""
	ret, frame = camera.read()
	qrcode, points, ret = qrCodeDetector.detectAndDecode(frame)
	if qrcode: 
		qrstr = str(qrcode)
	cv2.imshow("Frame", frame)
	if (qrcode in prev_codes or qrstr == ""): 
		if cv2.waitKey(1) == ord('q'):
			camera.release()
			break	
		continue
	
	if cv2.waitKey(1) == ord('q'):
		camera.release()
		break
	addToSheets(qrcode)
	prev_codes = qrcode
	

def fileImgRead(filePath):
	def readThroughFolder(filePath):
		imgFileList = glob.glob(filePath)
		readImgList = []
		for img in imgFileList:
			print(img)
			readImgList.append(cv2.imread(img))
		return readImgList

	imgList = readThroughFolder(filePath)
	for img in imgList:
		qrcode, stupidValue, a = qrCodeDetector.detectAndDecode(img)
		#for qrcode in qrcode:
		if qrcode:
			qrstr = str(qrcode)
		if (qrcode != None and qrcode != ""):
			print(qrcode)
			#addToSheets(qrcode)

			