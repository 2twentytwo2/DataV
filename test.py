class point:
    def __init__(self, x = 0, y = 0):
        self.__x = x
        self.__y = y

    def getx(self):
        return self.__x

    def gety(self):
        return self.__y

if __name__ == "__main__":
    p1 = point()
    print("p1_x = ", p1.getx(), " p1_y = ", p1.gety())