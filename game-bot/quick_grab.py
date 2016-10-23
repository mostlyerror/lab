from PIL import ImageGrab
import os
import time

def screen_grab():
    box = (157, 346, 796, 825)
    im = ImageGrab.grab(box)
    im.save("screen_capture_%d.png" % (int(time.time())), 'PNG')

def main():
    screen_grab()

if __name__ == '__main__':
    main()
