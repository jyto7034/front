a = input()
stack = []
answer = ''

for x in a :
    # 피연산자일 경우
    if x.isdecimal():# 10진수인지 확인
        answer += x 
    
    # 연산자일 경우 +-*/()
    else:
        if x=='(':
            stack.append(x)         
        elif x== ')':
            while stack and stack[-1]!='(': # (를 만날 때까지 연산.
                answer += stack.pop()
            stack.pop() # 스택에 쌓여있는 ( 없에기

        elif x=='*' or x=='/': 
            # 스택이 비어있지 않고 스택의 마지막이 *나 /일 때
            while stack and (stack[-1]=='*'or stack[-1]=='/'):
                answer += stack.pop() # 끄집어내서 누적
            stack.append(x)
        elif x=='+' or x=='-': # +-는 항상 후순위
            while stack and stack[-1]!='(':
                answer += stack.pop() # (를 만날 때까지 연산.
            stack.append(x)
    
# 스택에 남아있는 것들 연산
while stack:
    answer += stack.pop()

print(answer)