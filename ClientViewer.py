import sys
#TODO set lib for Linux
sys.path.append('./lib')
import threading
import numpy as np
from websocket import create_connection
import asyncio
import Leap
import cv2
import ctypes
import asyncio
import websockets

#TODO read doc about ctype
def convert_image(image):
    image_ptr = int(image.data_pointer)

    ctype_array_def = ctypes.c_ubyte * image.height * image.width

    as_ctype_array = ctype_array_def.from_address(image_ptr)

    dest = np.ctypeslib.as_array(as_ctype_array)
    dest = np.reshape(dest, (image.height, image.width))

    return dest

#TODO Maybe set the putText for a few frames (because too fast)
def run(controller):
    ws = create_connection("ws://127.0.0.1:6437/v6.json")
    while True:
        frame = controller.frame()
        image = frame.images[0]
        if image.is_valid:
            img = convert_image(image)
            for gesture in frame.gestures():
                if gesture.type is Leap.Gesture.TYPE_SWIPE:
                    #print("Swipe : Get json from websocket")
                    cv2.putText(img, "Swipe detected", (0, int(image.width/2)-100), cv2.FONT_HERSHEY_SIMPLEX, 1.0, (255, 255, 255), thickness=2, lineType=cv2.LINE_AA)
                elif gesture.type is Leap.Gesture.TYPE_CIRCLE:
                    #print("Circle : Get json from websocket")
                    cv2.putText(img, "Circle detected", (0, int(image.width/2)-100), cv2.FONT_HERSHEY_SIMPLEX, 1.0, (255, 255, 255), thickness=2, lineType=cv2.LINE_AA)

            cv2.imshow('Leap motion viewer', img)
            print(ws.recv())
            if cv2.waitKey(1) & 0xFF == ord('q'):
                ws.close()
                break

if __name__ == "__main__":
    controller = Leap.Controller()
    controller.set_policy_flags(Leap.Controller.POLICY_IMAGES)

    controller.enable_gesture(Leap.Gesture.TYPE_CIRCLE)
    controller.enable_gesture(Leap.Gesture.TYPE_SWIPE)
    controller.enable_gesture(Leap.Gesture.TYPE_KEY_TAP)
    controller.enable_gesture(Leap.Gesture.TYPE_SCREEN_TAP)
    try:
        cv2.namedWindow("Leap motion viewer", cv2.WINDOW_NORMAL)
        cv2.setWindowProperty("Leap motion viewer", cv2.WND_PROP_FULLSCREEN, cv2.WINDOW_NORMAL)

        run(controller)

    except KeyboardInterrupt:
        sys.exit(0)