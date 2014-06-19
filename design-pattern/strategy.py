# This code is copied from
# http://stackoverflow.com/questions/963965/how-is-this-strategy-pattern-written-in-python-the-sample-in-wikipedia
# Added by Brother Rain, Jun 16,2014

class StrategyExample :
    def __init__(self, func=None):
        if func :
             self.execute = func

    def execute(self):
        print "Original execution"


def executeReplacement1() :
        print "Strategy 1"


def executeReplacement2() :
         print "Strategy 2"

if __name__ == "__main__" :

    strategy0 = StrategyExample()
    strategy1 = StrategyExample(executeReplacement1)
    strategy2 = StrategyExample(executeReplacement2)

    strategy0.execute()
    strategy1.execute()
    strategy2.execute()

# Results
#   Original execution
#   Strategy 1
#   Strategy 2
